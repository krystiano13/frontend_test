import { useState } from "react";

export function Home() {
  return (
    <div className="content">
      <h1 className="content__heading">Nagłówek H1</h1>
      <div className="content__blocks">
        <section className="content__blocks__first_block">
          <h2>BLOK PIERWSZY</h2>
          <div className="content__blocks__first_block__options">
            <div className="content__blocks__first_block__options__option">
              <input type="radio" />
              <label>Opcja pierwsza</label>
            </div>
            <div className="content__blocks__first_block__options__option">
              <input type="radio" />
              <label>Opcja druga</label>
            </div>
            <div className="content__blocks__first_block__options__option">
              <input type="radio" />
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
            
              
          </p>
        </section>
      </div>
    </div>
  );
}
