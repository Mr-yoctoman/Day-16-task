let element = document.querySelector("h3");

setTimeout(() => {
  element.innerHTML = "10";
  setTimeout(() => {
    element.innerHTML = "9";
    setTimeout(() => {
      element.innerHTML = "8";
      setTimeout(() => {
        element.innerHTML = "7";
        setTimeout(() => {
          element.innerHTML = "6";
          setTimeout(() => {
            element.innerHTML = "5";
            setTimeout(() => {
              element.innerHTML = "4";
              setTimeout(() => {
                element.innerHTML = "3";
                setTimeout(() => {
                  element.innerHTML = "2";
                  setTimeout(() => {
                    element.innerHTML = "1";
                    setTimeout(() => {
                      element.innerHTML = "Happy Independence Day";
                    });
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
