import React from "react";

class Content extends React.Component {

    constructor(props) {
        super(props);
        this.state = { clicks2: 0, clicks3: 0 };
    }

    click2 = () => {
        this.setState({ clicks2: this.state.clicks2 + 1 });
    };

    click3 = () => {
        this.setState({ clicks3: this.state.clicks3 + 1 });
    };

    getClass(clicks, name) {
        if (clicks === 0) return "";
        if (clicks % 2 === 1) return name + "_style1";
        return name + "_style2";
    }

    render() {
        return (
        <div>
            <p className={this.getClass(this.state.clicks2, "el2")}
                onClick={this.click2}>
                Дата і місце народження: 8 вересня 2006 року, м. Дніпро
            </p>

            <p className={this.getClass(this.state.clicks3, "el3")}
                onClick={this.click3}>
                Освіта: Ліцей №5 м. Вільногірськ, Дніпропетровська область
                <br />
                НТУУ "КПІ", м. Київ
            </p>

            <p>Хобі:</p>
            <ul>
                <li>Програмна інженерія</li>
                <li>UI-UX дизайн</li>
                <li>Front-end</li>
                <li>GameDev</li>
            </ul>

            <p>Улюблені книги:</p>
            <ol>
                <li>"Вечірка на Геловін" Агата Крісті</li>
                <li>"Записки зі страти" Даня Кукафка</li>
                <li>"Шифр" Ізабелла Мальдонадо</li>
                <li>"Етюд у багряних тонах" Артур Конан Дойль</li>
            </ol>
        </div>
      );
    }
}

export default Content;