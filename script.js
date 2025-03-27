// Mobile Filter Dropdowns
document.addEventListener('DOMContentLoaded', function() {
    const filterSections = document.querySelectorAll('.filter-section');
    
    // Handle filter section dropdowns
    filterSections.forEach(section => {
        const header = section.querySelector('h3');
        
        header.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                // Close other sections
                filterSections.forEach(otherSection => {
                    if (otherSection !== section && otherSection.classList.contains('active')) {
                        otherSection.classList.remove('active');
                        otherSection.querySelector('h3').classList.remove('active');
                    }
                });
                
                // Toggle current section
                section.classList.toggle('active');
                header.classList.toggle('active');
            }
        });
    });
    
    // Handle category and price selections
    const categoryItems = document.querySelectorAll('.category-item');
    const priceItems = document.querySelectorAll('.price-item');
    
    categoryItems.forEach(item => {
        item.addEventListener('click', () => {
            categoryItems.forEach(otherItem => otherItem.classList.remove('active'));
            item.classList.add('active');
        });
    });
    
    priceItems.forEach(item => {
        item.addEventListener('click', () => {
            priceItems.forEach(otherItem => otherItem.classList.remove('active'));
            item.classList.add('active');
        });
    });
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && !e.target.closest('.filter-section')) {
            filterSections.forEach(section => {
                section.classList.remove('active');
                section.querySelector('h3').classList.remove('active');
            });
        }
    });
}); 