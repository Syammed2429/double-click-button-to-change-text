let button = document.querySelector('button')

      let genrateRandomNumbers = (num) => {
          return Math.floor(Math.random() * num);
      }

      let randomColor = () => {
          return 'rgb(' + genrateRandomNumbers(255) + ',' + genrateRandomNumbers(255) + ',' + genrateRandomNumbers(255) + ')';
        }

        let setColor = () => {
            let colorValue = randomColor();
            document.querySelector('h1').style.color = colorValue;
        }

        button.addEventListener('dblclick',setColor);
