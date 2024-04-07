document.addEventListener('DOMContentLoaded', function() {
    const checklistItems = document.querySelectorAll('#checklist li');

    checklistItems.forEach(function(item) {
      item.addEventListener('click', function() {
        item.classList.toggle('checked');
        const checkbox = item.querySelector('input[type="checkbox"]');
        checkbox.checked = !checkbox.checked;
      });
    });
  });