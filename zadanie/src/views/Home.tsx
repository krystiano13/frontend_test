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
            <button>
              <span>ZASTĄP</span>
            </button>
            <button>
              <span>DOKLEJ</span>
            </button>
          </div>
        </section>
        <section className="content__blocks__last_block">
          <h2>BLOK Z DŁUGĄ NAZWĄ, KTÓRA SAMA SIĘ PRZYTNIE ...</h2>
          <p>
            {content.map((item) => (
              <span>{item.text}</span>
            ))}
          </p>
        </section>
      </div>
    </div>
  );
}
