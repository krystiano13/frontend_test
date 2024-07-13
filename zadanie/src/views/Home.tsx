import React, { useState, useEffect, useRef } from "react";
import data from "../data/data.json";

type Content = {
  id: number;
  text: string;
};

export function Home() {
  const [content, setContent] = useState<Content[]>([data.array[0]]);
  const [option, setOption] = useState<string>("");

  function checkOption(e: React.ChangeEvent<HTMLInputElement>, option: string) {
    if (e.target.checked) {
      setOption(option);
    }
  }

  function replace() {
    if (option === "") return;

    switch (option) {
      case "one":
        setContent([data.array[0]]);
        break;
      case "two":
        setContent([data.array[1]]);
        break;
      case "rand":
        const min = 2;
        const max = 5;
        const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
        setContent([data.array[randomValue]]);
        break;
      default:
        return;
    }
  }

  function append() {
    if (option === "") return;

    let index = 0;

    let arr: Content[] = [];

    switch (option) {
      case "one":
        index = 0;
        arr = data.array;
        break;
      case "two":
        index = 1;
        arr = data.array;
        break;
      case "rand":
        const array = data.array.filter(
          (item) => item.id !== 1 && item.id !== 2
        );
        const new_array = array.filter(
          (item) => !content.some((el) => el.id === item.id)
        );

        if (new_array.length <= 0) {
          alert("Nie można dokleić danych");
          break;
        }

        const min = 0;
        const max = new_array.length - 1;
        const randomValue = Math.floor(Math.random() * (max - min + 1) + min);
        index = randomValue;
        arr = new_array;
        break;
    }

    if (!content.some((item) => item.id === arr[index].id)) {
      setContent((prev) => [...prev, arr[index]]);
    } else {
      alert("Nie można dokleić danych");
    }
  }

  return (
    <div className="content">
      <h1 className="content__heading">Nagłówek H1</h1>
      <div className="content__blocks">
        <section className="content__blocks__first_block">
          <h2>BLOK PIERWSZY</h2>
          <div className="content__blocks__first_block__options">
            <div className="content__blocks__first_block__options__option">
              <input
                onChange={(e) => checkOption(e, "one")}
                type="radio"
                name="option"
              />
              <label>Opcja pierwsza</label>
            </div>
            <div className="content__blocks__first_block__options__option">
              <input
                onChange={(e) => checkOption(e, "two")}
                type="radio"
                name="option"
              />
              <label>Opcja druga</label>
            </div>
            <div className="content__blocks__first_block__options__option">
              <input
                onChange={(e) => checkOption(e, "rand")}
                type="radio"
                name="option"
              />
              <label>Opcja losowa</label>
            </div>
          </div>
        </section>
        <section className="content__blocks__second_block">
          <h2>BLOK DRUGI</h2>
          <div className="content__blocks__second_block__btns">
            <button onClick={replace}>
              <span>ZASTĄP</span>
            </button>
            <button onClick={append}>
              <span>DOKLEJ</span>
            </button>
          </div>
        </section>
        <section className="content__blocks__last_block">
          <h2>BLOK Z DŁUGĄ NAZWĄ, KTÓRA SAMA SIĘ PRZYTNIE ...</h2>
          <p>
            {content.map((item) => (
              <span key={item.id}>{item.text}</span>
            ))}
          </p>
        </section>
      </div>
    </div>
  );
}
