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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            dolor tellus. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit. Vestibulum venenatis ut quam a sollicitudin. Vivamus hendrerit
            dictum sem nec bibendum. Maecenas imperdiet eget lorem at pulvinar.
            Nullam consectetur massa vel mi sagittis euismod id a quam. Etiam
            sagittis, enim eget mollis bibendum, ante justo laoreet enim, at
            ullamcorper neque diam nec risus.Aenean accumsan massa at massa
            facilisis, a commodo mi sagittis. Etiam feugiat pretium enim, sit
            amet vehicula ipsum euismod a. Aenean suscipit quam at diam
            imperdiet, id aliquet lorem vehicula.
          </p>
        </section>
      </div>
    </div>
  );
}
