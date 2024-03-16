document.addEventListener('DOMContentLoaded', function() {
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            var formData = new FormData(form);
            for (var pair of formData.entries()) {
                console.log(pair[0]+ ', '+ pair[1]); 
            }
    
            document.addEventListener('DOMContentLoaded', function() {
                var forms = document.querySelectorAll('form');
                forms.forEach(function(form) {
                    form.addEventListener('submit', function(event) {
                        event.preventDefault();
                        var formData = new FormData(form);

                        // Form validation
                        var email = formData.get('email');
                        var password = formData.get('password');
                        if (!email || !password) {
                            alert('Please fill out all fields.');
                            return;
                        }

                        // AJAX submission
                        fetch('/submit-form', {
                            method: 'POST',
                            body: formData
                        })
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.error('Error:', error));
                    });
                });
                        });
                    });
                });
            });