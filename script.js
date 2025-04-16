  // let score =
    //  {
    //   wins:0,
    //   losses:0,
    //   ties:0
    // };
    score= JSON.parse(localStorage.getItem('score')) || {
      wins:0,
      losses:0,
      ties:0
    };
    
  //  if(!score){
  //   score =
  //    {
  //     wins:0,
  //     losses:0,
  //     ties:0
  //   };
  //  }
   // console.log(score);
    let random_number;


   function randomNumber()
   {
    
    return  Math.floor(Math.random()*3);

   }



  function pickComputerMove( random_number)
  {
  
    if(random_number===0)
    {
      return 'rock';
    }
    else if(random_number===1)
    {
      return 'paper';
    }
    else
    {
      return 'scissor';
    }
  }


  function moveName(x)
  {
  
    if(x===0)
    {
      return 'rock';
    }
    else if(x===1)
    {
      return 'paper';
    }
    else
    {
      return 'scissor';
    }
  }


function pickUserMove(random_number ,x)
    {
      
      if(random_number===x)
          {
            score.ties= score.ties+1;
            return 'Draw';
          }
        else  if (random_number ==(x+1)%3) 
            {
              score.losses= score.losses+1;
              return 'You Loss';
            }
        else
            {
              score.wins= score.wins+1;
              return 'You Win';
            }
        
      }
       

    function game(x)
    { 
        let random_number=randomNumber();
        // console.log(`you have selected ${moveName(x)} and computer selected ${pickComputerMove(random_number)} so
        // result ${pickUserMove(random_number, x)}`);
        //  alert(`you have selected ${moveName(x)} and computer selected ${pickComputerMove(random_number)} so
        //  result ${pickUserMove(random_number, x)}`);
        let userResult= pickUserMove(random_number, x);
        // alert(`you have selected ${moveName(x)} and computer selected ${pickComputerMove(random_number)} so result ${userResult} 
        // wins:${score.wins}, losses:${score.losses}, Ties:${score.ties}`);
        localStorage.setItem('score', JSON.stringify(score));
        resultDisplay(userResult);
        chooice(x,random_number);

    }
  
    function resultDisplay(x)
    {
      //console.log(x);
      document.querySelector('.resultDisplay').innerHTML=x;
    }

    
    function chooice(x,random_number)
    { const a = moveName(x);
      const b = pickComputerMove(random_number);
      const userImage = image(a);
      const computerImage = image(b);
      //console.log(a);
      document.querySelector('.choice').innerHTML=`you-> ${userImage}  computer->  ${computerImage}`;
    }
    function showResult()
    {
      document.querySelector('.result').innerHTML= `wins:${score.wins}, losses:${score.losses}, Ties:${score.ties}`;
    }
    
    function image(x)
    {
      if(x==='rock')
        {
         return'<img src="dwayne-johnson-the-rock-hbz.png" alt="rock" width="60">';
        }
        
        if(x==='paper')
        {
           return '<img src="10-removebg-preview.png" alt="paper" width="60">';
        }
        else
        {
         return '<img src="images-removebg-preview.png" alt="scissor" width="60">';
        }
      
    }

