const scriptURL = 'https://script.google.com/macros/s/AKfycbwX62KrzfYAfATOcwdNYdsKMab-Fa8g_ZEz8he26RejHOCCW6eP/exec'
        const form = document.forms['submit-to-google-sheet']
        const loading = document.querySelector('.js-loading')
        const successMessage = document.querySelector('.js-success-message')
        const errorMessage = document.querySelector('.js-error-message')
    
        form.addEventListener('submit', e => {

          e.preventDefault(); 

          var agePrincipalMember = document.getElementById("agePrincipalMember").value;
          var firstName = document.getElementById("firstName").value;
          var lastName = document.getElementById("lastName").value;
          var phone = document.getElementById("phone").value;
          var email = document.getElementById("email").value;

          if (agePrincipalMember == "") { 
            agePrincipalMember.focus();
            return false;
          }
          if (firstName == "") { 
            firstName.focus();
            return false;
          }
          if (lastName == "") { 
            lastName.focus();
            return false;
          }
          if (phone == "") { 
            phone.focus();
            return false;
          }
          if (email == "") { 
            email.focus();
            return false;
          }




          showLoadingIndicator();
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => showSuccessMessage(response))
            .catch(error => showErrorMessage(error))
        });
    
        function showLoadingIndicator () {
          // form.classList.add('is-hidden');
          loading.classList.remove('is-hidden');
        }
    
        function showSuccessMessage (response) {
          console.log('Success!', response);
          
          // document.getElementById("submit-to-google-sheet").reset();
          successMessage.classList.remove('is-hidden');
          loading.classList.add('is-hidden');
          form.reset();

          setTimeout(() => { 
            successMessage.classList.add('is-hidden');
          }, 3000);
        }
    
        function showErrorMessage (error) {
          console.error('Error!', error.message);
          setTimeout(() => {
            errorMessage.classList.remove('is-hidden');
            loading.classList.add('is-hidden');
          }, 500);
        }
