document.getElementById('contrast-toggle').addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');

if (document.body.classList.contains('high-contrast')) {
        document.documentElement.style.setProperty('--transparent-light', 'rgba(255, 255, 255, 0.09)');
        document.documentElement.style.setProperty('--transparent-lighter', 'rgb(39, 41, 45)');

        document.documentElement.style.setProperty('--primary-color', '#6fedff');

    
      } else {
            document.documentElement.style.setProperty('--transparent-light', 'rgba(255, 255, 255, 0.432)');
            document.documentElement.style.setProperty('--transparent-lighter', 'rgba(255, 255, 255, 0.527)');
            document.documentElement.style.setProperty('--primary-color', '#003d80');
        
      }
    });
    