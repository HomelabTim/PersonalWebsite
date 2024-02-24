document.addEventListener('DOMContentLoaded', function () {
    const blogContainer = document.querySelector('#new_portfolio .cs-card-group');
    const arrows = document.querySelectorAll('.cs-carousel-button');

    // Function to scroll the container left by one blog post width
    function scrollLeft() {
        blogContainer.scrollBy({
            left: -blogContainer.offsetWidth,
            behavior: 'smooth'
        });
    }

    // Function to scroll the container right by one blog post width
    function scrollRight() {
        blogContainer.scrollBy({
            left: blogContainer.offsetWidth,
            behavior: 'smooth'
        });
    }

    // Dropdown menu for filtering categories
    const categoryDropdown = document.querySelector('#category-dropdown');

    categoryDropdown.addEventListener('change', function () {
        const selectedCategory = this.value;

        console.log("Selected category:", selectedCategory);

        // Loop through blog post items and hide/show based on category
        document.querySelectorAll('.cs-item').forEach(function (item) {
            const category = item.querySelector('.cs-category');
            console.log("Item category:", category ? category.textContent.trim() : null);
            if (!category || selectedCategory === 'all' || category.textContent.trim().toLowerCase() === selectedCategory.toLowerCase()) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });

    // Function to handle window resize event
    function handleResize() {
        // Check if the arrows should be shown or hidden based on screen width
        const screenWidth = window.innerWidth;
        if (screenWidth <= 1640) {
            arrows.forEach(function (arrow) {
                arrow.style.display = 'none';
            });
        } else {
            arrows.forEach(function (arrow) {
                arrow.style.display = 'block';
            });
        }
    }

    // Add event listeners to scroll left and right
    document.querySelector('.cs-carousel-button-left').addEventListener('click', scrollLeft);
    document.querySelector('.cs-carousel-button-right').addEventListener('click', scrollRight);

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to handle window resize
    handleResize();
});
