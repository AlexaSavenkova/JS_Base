'use strict';
const chess = {
    init() {
        this.drawChessBoard();
        this.setFigures();
    },
    squares: [], //игровое поле делаю массивом
    figures: [
        {name:'p', color:'w', pos:'a2'},
        {name:'p', color:'w', pos:'b2'},
        {name:'p', color:'w', pos:'c2'},
        {name:'p', color:'w', pos:'d2'},
        {name:'p', color:'w', pos:'e2'},
        {name:'p', color:'w', pos:'f2'},
        {name:'p', color:'w', pos:'g2'},
        {name:'p', color:'w', pos:'h2'},
        {name:'R', color:'w', pos:'a1'},
        {name:'N', color:'w', pos:'b1'},
        {name:'B', color:'w', pos:'c1'},
        {name:'Q', color:'w', pos:'d1'},
        {name:'K', color:'w', pos:'e1'},
        {name:'B', color:'w', pos:'f1'},
        {name:'N', color:'w', pos:'g1'},
        {name:'R', color:'w', pos:'h1'},
    
        {name:'p', color:'b', pos:'a7'},
        {name:'p', color:'b', pos:'b7'},
        {name:'p', color:'b', pos:'c7'},
        {name:'p', color:'b', pos:'d7'},
        {name:'p', color:'b', pos:'e7'},
        {name:'p', color:'b', pos:'f7'},
        {name:'p', color:'b', pos:'g7'},
        {name:'p', color:'b', pos:'h7'},
        {name:'R', color:'b', pos:'a8'},
        {name:'N', color:'b', pos:'b8'},
        {name:'B', color:'b', pos:'c8'},
        {name:'Q', color:'b', pos:'d8'},
        {name:'K', color:'b', pos:'e8'},
        {name:'B', color:'b', pos:'f8'},
        {name:'N', color:'b', pos:'g8'},
        {name:'R', color:'b', pos:'h8'},
      ],
      figureHtml: {
        pw: '&#9817;',
        Bw: '&#9815;',
        Nw: '&#9816;',
        Rw: '&#9814;',
        Qw: '&#9813;',
        Kw: '&#9812;',
    
        pb: '&#9823;',
        Bb: '&#9821;',
        Nb: '&#9822;',
        Rb: '&#9820;',
        Qb: '&#9819;',
        Kb: '&#9818;',
      },

    drawChessBoard() {
        const chessBoard = document.createElement('div');
        chessBoard.className = 'chess-board';
        document.querySelector('body').appendChild(chessBoard);

        let square;
        let isWhite = true;

        drawLetters();

        for (let i = 0; i < 8; i++) {
            drawNumber(i);
            let row = [];
            for (let j = 0; j < 8; j++) {
                square = document.createElement('div');
                if (isWhite) {
                    square.className = 'square white';
                } else {
                    square.className = 'square black';
                }
                isWhite = !isWhite;
                chessBoard.appendChild(square);
                row.push(square);
            }
            this.squares.unshift(row);

            isWhite = !isWhite;
            drawNumber(i);
        }
        drawLetters();

        // эти 2 функции не выношу в метод объекта chess, т.к. они нужны 
        // исключительно для прорисовки шахматной доски и вряд ли будут
        // использоваться отдельно от метода drawChessBoard
        function drawLetters() {
            const letters = ['', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', ''];
            for (let i = 0; i < 10; i++) {
                chessBoard.insertAdjacentHTML('beforeend', `<div class="square">${letters[i]}</div>`);
            }
        }
        function drawNumber(i) {
            const numbers = ['8', '7', '6', '5', '4', '3', '2', '1'];
            chessBoard.insertAdjacentHTML('beforeend', `<div class="square">${numbers[i]}</div>`);
        }

    },

    getSquareByPosition(position) {
        let j = position.charAt(0);
        let i = +position.charAt(1) - 1;
        switch (j) {
            case 'a': j = 0; break;
            case 'b': j = 1; break;
            case 'c': j = 2; break;
            case 'd': j = 3; break;
            case 'e': j = 4; break;
            case 'f': j = 5; break;
            case 'g': j = 6; break;
            case 'h': j = 7; break;
        }
        return this.squares[i][j];
    },

    setFigures() {
        for (const figure of this.figures) {
            let cell =this.getSquareByPosition(figure.pos);
            // если есть ошибка в координатах клетки, фигура не нарисуется,
            // но программа продолжит работу
            if(cell) {
                cell.innerHTML = this.figureHtml[figure.name + figure.color];
            }
        }
    },
};

chess.init();
