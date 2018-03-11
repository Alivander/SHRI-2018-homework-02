var consoleMobile = document.querySelector(".consoleMobile");

// ===================== Пример кода первой двери =======================
/**
 * @class Door0
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door0(number, onUnlock) {
    DoorBase.apply(this, arguments);

    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2')
    ];

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerDown(e) {
        e.target.classList.add('door-riddle__button_pressed');
        checkCondition.apply(this);
    }

    function _onButtonPointerUp(e) {
        e.target.classList.remove('door-riddle__button_pressed');
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = true;
        buttons.forEach(function(b) {
            if (!b.classList.contains('door-riddle__button_pressed')) {
                isOpened = false;
            }
        });

        // Если все три кнопки зажаты одновременно, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
}

// Наследуемся от класса DoorBase
Door0.prototype = Object.create(DoorBase.prototype);
Door0.prototype.constructor = DoorBase;
// END ===================== Пример кода первой двери =======================

/**
 * @class Door1
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door1(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия второй двери здесь ====
    var buttons = [
        this.popup.querySelector('.door-riddle__button_2'),
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_3'),
        this.popup.querySelector('.door-riddle__button_4')
    ];
    
    var currentPosition = 0;
    var startPosition = 0;
    var isGestureStarted = false;

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointermove', _onButtonPointerMove.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerDown(e) {
        e.target.classList.add('door-riddle__button_pressed');
    }
    
    function _onButtonPointerMove(e) {
      updatePosition(e);
    }

    function _onButtonPointerUp(e) {
        checkCondition.apply(this);
    }
    
    function updatePosition(q) {
      var diffX = q.pageX - q.target.offsetLeft - (q.target.offsetWidth / 2);
      var diffY = q.pageY - q.target.offsetTop - (q.target.offsetHeight / 2);
      q.target.style.transform = 'translate(' + diffX + "px, " + diffY + 'px)';
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = false;
        var countOfGuessedCells = 0;
        buttons.forEach(function(b) {
          if (parseInt(b.style.transform.slice(7)) % 360 == 0) {
            countOfGuessedCells++;
          }
        });
        if (countOfGuessedCells == buttons.length) {
          isOpened = true;
        }

        // Если все три кнопки зажаты одновременно, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
    // ==== END Напишите свой код для открытия второй двери здесь ====
}
Door1.prototype = Object.create(DoorBase.prototype);
Door1.prototype.constructor = DoorBase;

/**
 * @class Door2
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Door2(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия третей двери здесь ====
    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2'),
        this.popup.querySelector('.door-riddle__button_3'),
        this.popup.querySelector('.door-riddle__button_4'),
        this.popup.querySelector('.door-riddle__button_5'),
    ];

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerDown(e) {
        var angleOfRotation = parseInt(e.target.style.transform.slice(7));
        e.target.style.transform = "rotate(" + (angleOfRotation + 90) + "deg)";
    }

    function _onButtonPointerUp(e) {
        var angleOfRotation = parseInt(e.target.style.transform.slice(7));
        if (angleOfRotation % 360 == 0) {
          checkCondition.apply(this);
        }
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = false;
        var countOfGuessedCells = 0;
        buttons.forEach(function(b) {
          if (parseInt(b.style.transform.slice(7)) % 360 == 0) {
            countOfGuessedCells++;
          }
        });
        if (countOfGuessedCells == buttons.length) {
          isOpened = true;
        }

        // Если все три кнопки зажаты одновременно, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
    // ==== END Напишите свой код для открытия третей двери здесь ====
}
Door2.prototype = Object.create(DoorBase.prototype);
Door2.prototype.constructor = DoorBase;

/**
 * Сундук
 * @class Box
 * @augments DoorBase
 * @param {Number} number
 * @param {Function} onUnlock
 */
function Box(number, onUnlock) {
    DoorBase.apply(this, arguments);

    // ==== Напишите свой код для открытия сундука здесь ====
    var buttons = [
        this.popup.querySelector('.door-riddle__button_0'),
        this.popup.querySelector('.door-riddle__button_1'),
        this.popup.querySelector('.door-riddle__button_2'),
        this.popup.querySelector('.door-riddle__button_3'),
        this.popup.querySelector('.door-riddle__button_4'),
        this.popup.querySelector('.door-riddle__button_5'),
        this.popup.querySelector('.door-riddle__button_6'),
        this.popup.querySelector('.door-riddle__button_7'),
        this.popup.querySelector('.door-riddle__button_8')
    ];

    buttons.forEach(function(b) {
        b.addEventListener('pointerdown', _onButtonPointerDown.bind(this));
        b.addEventListener('pointerup', _onButtonPointerUp.bind(this));
        b.addEventListener('pointercancel', _onButtonPointerUp.bind(this));
        b.addEventListener('pointerleave', _onButtonPointerUp.bind(this));
    }.bind(this));

    function _onButtonPointerDown(e) {
        var angleOfRotation = parseInt(e.target.style.transform.slice(7));
        e.target.style.transform = "rotate(" + (angleOfRotation + 90) + "deg)";
    }

    function _onButtonPointerUp(e) {
        var angleOfRotation = parseInt(e.target.style.transform.slice(7));
        if (angleOfRotation % 360 == 0) {
          checkCondition.apply(this);
        }
    }

    /**
     * Проверяем, можно ли теперь открыть дверь
     */
    function checkCondition() {
        var isOpened = false;
        var countOfGuessedCells = 0;
        buttons.forEach(function(b) {
          if (parseInt(b.style.transform.slice(7)) % 360 == 0) {
            countOfGuessedCells++;
          }
        });
        if (countOfGuessedCells == buttons.length) {
          isOpened = true;
        }

        // Если все три кнопки зажаты одновременно, то откроем эту дверь
        if (isOpened) {
            this.unlock();
        }
    }
    // ==== END Напишите свой код для открытия сундука здесь ====

    this.showCongratulations = function() {
        alert('Поздравляю! Игра пройдена!');
    };
}
Box.prototype = Object.create(DoorBase.prototype);
Box.prototype.constructor = DoorBase;
