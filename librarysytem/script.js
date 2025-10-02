
// Library Management System - Complete Working JavaScript

// Store all books
let books = [];


// LOAD AND SAVE BOOKS

function loadBooks() {
    const saved = localStorage.getItem('libraryBooks');
    if (saved) {
        books = JSON.parse(saved);
    } else {
        // Default books
        books = [
            {id: 1, title: "HTML", author: "Publica Academy", year: 2025, status: "available"},
             {id: 2, title: "CSS", author: "Publica Academy", year: 2025, status: "available"},
             {id: 3, title: "JAVA SCRIPT", author: "Publica Academy", year: 2025, status: "available"},
             
        ];
        saveBooks();
    }
}

function saveBooks() {
    localStorage.setItem('libraryBooks', JSON.stringify(books));
}


// DISPLAY BOOKS


function displayBooks(view) {
    const container = document.getElementById(view === 'dashboard' ? 'dashboardBooks' : 'studentBooks');
    if (!container) return;
    
    const searchInput = document.getElementById(view === 'dashboard' ? 'dashboardSearch' : 'studentSearch');
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';

    // Filter books
    let filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchTerm) ||
        book.author.toLowerCase().includes(searchTerm)
    );

    // No books found
    if (filteredBooks.length === 0) {
        container.innerHTML = `
            <div class="empty-state" style="grid-column: 1/-1;">
                <h3>📚 No books found</h3>
                <p>${searchTerm ? 'Try a different search term' : 'Add your first book to get started'}</p>
            </div>
        `;
        return;
    }

    // Show books
    container.innerHTML = filteredBooks.map(book => `
        <div class="book-card ${book.status}">
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Year:</strong> ${book.year}</p>
            <span class="book-status status-${book.status}">
                ${book.status === 'available' ? ' Available' : ' Out Of Stock'}
            </span>
            ${view === 'dashboard' ? `
                <div class="book-actions">
                    <button onclick="toggleStatus(${book.id})" class="btn btn-success">
                        ${book.status === 'available' ? 'Mark as Out Of Stock' : 'Mark as Available'}
                    </button>
                    <button onclick="deleteBook(${book.id})" class="btn btn-danger">Delete</button>
                </div>
            ` : ''}
        </div>
    `).join('');
}


// SEARCH BOOKS


function searchBooks(view) {
    displayBooks(view);
}


// CHANGE BOOK STATUS


function toggleStatus(id) {
    const book = books.find(b => b.id === id);
    if (book) {
        book.status = book.status === 'available' ? 'checked-out' : 'available';
        saveBooks();
        displayBooks('dashboard');
        updateStats();
        showMessage('Book status updated!');
    }
}


// DELETE BOOK


function deleteBook(id) {
    if (confirm('Are you sure you want to delete this book?')) {
        books = books.filter(b => b.id !== id);
        saveBooks();
        displayBooks('dashboard');
        updateStats();
        showMessage('Book deleted successfully!');
    }
}


// UPDATE STATISTICS


function updateStats() {
    const totalEl = document.getElementById('totalBooks');
    const availableEl = document.getElementById('availableBooks');
    const checkedOutEl = document.getElementById('checkedOutBooks');
    
    if (totalEl) totalEl.textContent = books.length;
    if (availableEl) availableEl.textContent = books.filter(b => b.status === 'available').length;
    if (checkedOutEl) checkedOutEl.textContent = books.filter(b => b.status === 'checked-out').length;
}


// SHOW/HIDE ADD BOOK FORM


function showAddBookForm() {
    const section = document.getElementById('addBookSection');
    if (section) {
        section.style.display = 'block';
        document.getElementById('bookTitle').focus();
    }
}

function hideAddBookForm() {
    const section = document.getElementById('addBookSection');
    if (section) {
        section.style.display = 'none';
        document.getElementById('addBookForm').reset();
    }
}


// LOGOUT


function logout() {
    localStorage.removeItem('librarianLoggedIn');
    window.location.href = 'login.html';
}


// SHOW SUCCESS MESSAGE


function showMessage(message) {
    const successEl = document.getElementById('successMessage');
    if (successEl) {
        successEl.innerHTML = `<div class="alert alert-success">${message}</div>`;
        setTimeout(() => {
            successEl.innerHTML = '';
        }, 3000);
    }
}


// PAGE INITIALIZATION


// Wait for page to load completely
window.addEventListener('DOMContentLoaded', function() {
    
   
    // LOGIN PAGE
   
    if (document.getElementById('loginForm')) {
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === username && password === password) {
                localStorage.setItem('librarianLoggedIn', 'true');
                localStorage.setItem('username', 'admin');
                localStorage.setItem('password', 'library123');
                window.location.href = 'dashboard.html';
            } else {
                document.getElementById('loginError').innerHTML = '<div class="alert alert-error">Invalid username or password!</div>';
            }
        });
    }

   
    // DASHBOARD PAGE
   
    if (document.getElementById('dashboardBooks')) {
        // Check if logged in
        if (localStorage.getItem('librarianLoggedIn') !== 'true') {
            window.location.href = 'login.html';
            return;
        }

        // Load books
        loadBooks();
        displayBooks('dashboard');
        updateStats();

        // Add book form handler
        const addBookForm = document.getElementById('addBookForm');
        if (addBookForm) {
            addBookForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Get form values
                const title = document.getElementById('bookTitle').value.trim();
                const author = document.getElementById('bookAuthor').value.trim();
                const year = parseInt(document.getElementById('bookYear').value);
                const status = document.getElementById('bookStatus').value;

                // Validate inputs
                if (!title || !author || !year) {
                    alert('Please fill in all fields!');
                    return;
                }

                // Create new book
                const newBook = {
                    id: Date.now(),
                    title: title,
                    author: author,
                    year: year,
                    status: status
                };

                // Add to books array
                books.push(newBook);
                
                // Save to localStorage
                saveBooks();
                
                // Update display
                displayBooks('dashboard');
                updateStats();
                
                // Reset and hide form
                addBookForm.reset();
                hideAddBookForm();
                
                // Show success message
                showMessage('Book "' + title + '" added successfully!');
                
                console.log('Book added:', newBook);
                console.log('Total books:', books.length);
            });
        }
    }


    // STUDENT PAGE
   
    if (document.getElementById('studentBooks')) {
        loadBooks();
        displayBooks('student');
        console.log('Student page loaded. Books:', books.length);
    }
    
});
