import React from 'react';

const ctaSection = ({ elements }) => {
  const buttons = elements.buttons.map(({ elements }) =>
    <li>
      <a
        href={elements.url.value}
        class={`button ${elements.special.value.map((isChecked) => isChecked.codename)}`}>
        {elements.text.value}
      </a>
    </li>);

  return (
    <section id="four" class="main style2 special">
      <div class="container">
        <header class="major">
          <h2>{elements.primary_text.value}</h2>
        </header>
        <p>{elements.secondary_text.value}</p>
        <ul class="actions uniform">
          {buttons}
        </ul>
      </div>
    </section>
  );
}
export default ctaSection;