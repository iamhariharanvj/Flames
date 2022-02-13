async function flames(){



    $('#flames-text').text('FLAMES');
    document.getElementById("names").scrollIntoView({ behavior: "smooth" });

    var name_one = $('#firstname').val().toUpperCase();
    var name_two = $('#secondname').val().toUpperCase();
    var flames = "FLAMES";

    var fName = name_one;
    var sName = name_two;

    var replacedLettersOne = [];
    var replacedLettersTwo = [];

    name_one.split(' ').join('');
    name_two.split(' ').join('');


    function replaceAt(string, index, replace) {
        return string.substring(0, index) + replace + string.substring(index + 1);
      }
    


    flames = flames.split("");



    for (i=0;i<name_one.length;i++){
        for(j=0;j<name_two.length;j++){
          if(name_one[i]==name_two[j]){

            replacedLettersOne.push(name_one[i]);
            replacedLettersTwo.push(name_one[i]);


            name_one=replaceAt(name_one,i,'*');
            name_two=replaceAt(name_two,j,'*');

          }
        }
      }

      replacedLettersOne.forEach(element => {

        if (element != " "){
         
        fName = fName.replace(element,`<span class="strikethrough">${element.toLowerCase()}</span>`);
        sName =sName.replace(element,`<span class="strikethrough">${element.toLowerCase()}</span>`);
 
        }
      });

    

    writeNames(fName,sName);


    var replacedNameOne = name_one.split("*").join('');
    var replacedNameTwo = name_two.split("*").join('');
    var delList = [];


    var count = replacedNameOne.length + replacedNameTwo.length;

    $("#nletters").text(count);


    console.log(replacedNameOne.length);


    while (flames.length >1){

        var index = (count%flames.length)-1;
        if (index<0){
          delList.push(flames[index+flames.length]);
        }
        else{
        delList.push(flames[index]);
        }
        flames.splice(index, 1);
        

    }



    var word = "FLAMES";
    var words =  shuffle(word.split("")).join("");

    var done = 0;

    delList = shuffle(delList);
    


    delList.forEach((a)=>{


      setTimeout(function(){
        word =  word.replace(a,`<span class="strikesthrough">${a}</span>`);

        $("#flames-text").html(word);
        done = done+1;        

        var result = flames.join("");
        console.log(result);



        if (done == 5){

          var number = Math.ceil(Math.random() * (3 - 1) + 1);
          const music = new Audio(`songs/${result+number}.mp3`);
          
          music.addEventListener('ended', function() {
            music = new Audio(`songs/${result+number}.mp3`);
            music.play();
            }, false);
                
          music.play();



            switch(result){
              case 'F':
                $('#result').text('You are good friends');
                break;
      
              case 'L':
                $('#result').text('Romeo and Juliet would get jealous of you');
                break;
      
              case 'A':
                $('#result').text('Both are affectionate with each other');
                break;
      
              case 'M':
                $('#result').text('You will be a good couple in the future');
                break;
      
              case 'E':
                $('#result').text('You are enemies');
                break;
      
              case 'S':
                $('#result').text('You are meant to be siblings');
                break;
        
              default:
                break;

            }
    
          
          
          

          $('#flames').append('<a href="/"><button id="submit" style="text-align: center;" class="btn btn-danger">&#8635;</button></a>');

          $('#firstname').attr('readonly','readonly');
          $('#secondname').attr('readonly', 'readonly');
          $('#submit').attr('readonly', 'readonly');

        }

        
      },(2000*words.indexOf(a))+2000)


      
      
    })}




function writeNames(name_one, name_two){
    $('#fName').html(name_one);
    $('#SName').html(name_two);
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
  
      // Generate random number
      var j = Math.floor(Math.random() * (i + 1));
                  
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
      
  return array;
}
















