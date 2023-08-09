window.sendFeedback = () => {
    let feedbackEmail = document.querySelector('#email').value;
    let feedbackMessage = document.querySelector('#message').value;
    let feedbackFrom = document.querySelector('feedbackFrom')
    axios.post('/api/v1/feedback', {
        email: feedbackEmail,
        message: feedbackMessage
    })
        .then(function (Response) {
            console.log(Response);
            alert(`${Response.data}`);
            location.reload();
        })
        .catch(function (error) {
            console.log(error)
            alert('Error While sending the Feedback');
        });    
    
}