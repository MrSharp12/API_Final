$(() => {

  
    const NEW_BUTTON_TITLES = [
        'Keep going?',
        'Tell another!', 
        'One more?', 
        'Jokes...I got em.', 
        'And another one.',
        'Jokes and jokes.',
        'Hit me!',
        'Want another?'
    ];
    let x = 0;

$('#tellJoke').click((e) => {

    $.ajax({
        type: 'GET',
        url: 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'
    }).done((res) => {
        let setup = res.setup;
        let punchline = res.punchline;
        
        theJoke(setup);
        jokeConclusion(punchline);
    })
});


    function theJoke(joke) {
        $('#jokeSetUp').text(joke);
        $('#jokeSetUp').css('font-size', '30px');
    }

    function jokeConclusion(punchL) {
        $('#thePunchline').text(punchL);
        $('#thePunchline').css('font-size', '30px');
    }

    
    $('#tellJoke').on('click', (e) => {
        $('#tellJoke').text(NEW_BUTTON_TITLES[x]);
        x++;
        if (x >= NEW_BUTTON_TITLES.length) x = 0;
    })
});

