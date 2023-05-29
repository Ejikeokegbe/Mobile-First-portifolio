const generalArticle = `
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text 
ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it to make a type specimen book. It has survived not 
only five centuries, but also the leap into electronic typesetting, 
remaining essent
`;

const DgeneralArticle = `
Lorem Ipsum is simply dummy text of the printing and typesetting 
industry. Lorem Ipsum has been the industry's standard dummy text 
ever since the 1500s, when an unknown printer took a galley of type 
and scrambled it 1960s. Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. 
<br> <br>
Lorem Ipsum has been the industry's standard dummy text ever since 
the 1500s, when an unknown printer took a galley of type and scrambled 
it 1960s with the releorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum han printer took a galley of type 
and scrambled it 1960s with the releawn printer took a galley of type 
and scrambled it 1960s.
`;

const pageData = {
  mobileData: [
    {
      name: 'Tonic',
      article: generalArticle,
      image: 'pimages/Snapshoot Portfolio.png',
      liveLink: '#',
      sourceLink: 'https://ejikeokegbe.github.io/Mobile-First-portifolio/'
    },
    {
      name: 'Multi-Post<br>Stories',
      article: generalArticle,
      image: './assets/cards/card2.svg',
      liveLink: '#',
      sourceLink: 'https://ejikeokegbe.github.io/Mobile-First-portifolio/'
    },
    {
      name: 'Tonic',
      article: generalArticle,
      image: './assets/cards/card3.svg',
      liveLink: '#',
      sourceLink: 'https://ejikeokegbe.github.io/Mobile-First-portifolio/'
    },
    {
      name: 'Multi-Post<br>Stories',
      article: generalArticle,
      image: './assets/cards/card4.svg',
      liveLink: '#',
      sourceLink: 'https://ejikeokegbe.github.io/Mobile-First-portifolio/'
    }
  ],

  desktopData: [
    {
      name: 'Tonic',
      company: 'CANOPY',
      stack: 'Back End Dev',
      year: '2015',
      image: 'pimages/Snapshoot Portfolio@2x.png',
      article: DgeneralArticle,
      tech: ['html', 'CSS', 'JavaScript', 'Ruby', 'Bootstrap'],
      liveLink: '#',
      sourceLink: 'https://ejikeokegbe.github.io/Mobile-First-portifolio/'
    },
    {
      name: 'Multi-Post Stories',
      company: 'FACEBOOK',
      stack: 'Full Stack Dev',
      year: '2015',
      image: 'pimages/Snapshoot Portfolio (3).png',
      article: DgeneralArticle,
      tech: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: 'https://ejikeokegbe.github.io/Mobile-First-portifolio/'
    },
    {
      name: 'Facebook 360',
      company: 'FACEBOOK',
      stack: 'Full Stack Dev',
      year: '2015',
      image: 'pimages/Snapshoot Portfolio.png',
      article: DgeneralArticle,
      tech: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: 'https://ejikeokegbe.github.io/Mobile-First-portifolio/'
    },
    {
      name: 'Uber Navigation',
      company: 'Uber',
      stack: 'Lead Developer',
      year: '2018',
      image: 'pimages/Snapshoot Portfolio (1).png',
      article: DgeneralArticle,
      tech: ['html', 'Ruby on Rails', 'CSS', 'JavaScript'],
      liveLink: '#',
      sourceLink: 'https://ejikeokegbe.github.io/Mobile-First-portifolio/'
    }
  ]
};

function popup(page, index) {
  let proj = page.mobileData[index];
  let str = `<section class="main-pop">
  <img class="close-btn" id="close" src="pimages/Disabled.png" alt="cancel-icon">
  <section class="card pop-card">
      <div class="card-header">
          <h2>${proj.name}</h2>
          <ul class="copyright">
              <li class="m-img">CANOPY</li>
              <li>Back End Dev</li>
              <li>2015</li>
          </ul>
      </div>
      <img class="m-img" src="${proj.image}" alt="Tonic">
      <article class="card-container">
          <p class="content">
              ${proj.article}
          </p>
          <ul class="tags">
              <li><a href="#">HTML</a></li>
              <li><a href="#">CSS</a></li>
              <li><a href="#">JavaScript</a></li>     
          </ul>
          <div class="line">
              <div></div>
          </div>
          <ul class="action">
              <li>
                  <a class="action-btn btn" href="${proj.liveLink}">
                      <p>See live</p>
                      <img class="action-img" src="pimages/Live Button.png" alt="live">
                  </a>
              </li>
              <li>
                  <a class="action-btn btn" href="${proj.sourceLink}">
                      <p>See source</p>
                      <img class="action-img" src="pimages/githunDploy.png" alt="source">
                  </a>
              </li>
          </ul>
      </article>
  </section>    
  </section>  
`;

  return str;
}

function desktopPopUp(page, index) {
  let proj = page.desktopData[index];
  let techLi = `<ul class="tech tags">
    `;
  for (let i = 0; i < proj.tech.length; i += 1) {
    techLi += `<li><a href="#">${proj.tech[i]}</a></li>
        `;
  }
  techLi += '</ul>';
  const techUL = techLi;

  const str = `
  <section class="D-pop-card">
    <section class="D-popup">
   
        <div class="D-X">
        <div class="card-header">
            <h2>${proj.name}</h2>
            <ul class="copyright">
                <li class="d-img">${proj.company}</li>
                <li>${proj.stack}</li>
                <li>${proj.year}</li>
            </ul>
        </div> 
        <img class="D-popup-cancel" id="D-close" src="pimages/Disabled.png" alt="cancel-icon">
        </div>
    <img class="D-popup-img" src="${proj.image}" alt="Tonic" class="d-img">
    <section class="D-h3and">
        <article class="article">${proj.article}</article>
        <div class="TnA">
            ${techUL}
            <div class="line">
                <div></div>
            </div>
            <ul class="D-action">
                <li>
                    <a class="action-btn btn" href="${proj.liveLink}">
                        <p>See live</p>
                        <img class="action-img" src="pimages/Live Button.png" alt="live">
                    </a>
                </li>
                <li>
                    <a class="action-btn btn" href="${proj.sourceLink}">
                        <p>See source</p>
                        <img class="action-img" src="pimages/githunDploy.png" alt="source">
                    </a>
                </li>
            </ul>

        </div>
    </section>
    </section>
</section>
`;

  return str;
}

const buttons = document.getElementsByClassName('last-btn');
const mobileSection = document.getElementById('cont');
const desktopSection = document.getElementById('D-cont');
const main = document.getElementById('main');

// button cancel event checker. 
let eventChecker = 0;

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    const previousScrollTop = (window.pageYOffset
    || document.documentElement.scrollTop || document.body.scrollTop || 0
    );
    mobileSection.innerHTML = popup(pageData, i);
    mobileSection.style.display = 'flex';
    main.style.display = 'none';
    eventChecker = 0;

    window.scrollTo(0, 0);

    const closeBtn = document.getElementById('close');

    closeBtn.addEventListener('click', () => {
      eventChecker = 1;
      mobileSection.style.display = 'none';
      main.style.display = 'block';
      desktopSection.style.display = 'none';
      window.scrollTo(0, previousScrollTop);
    });
  });
}

for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    desktopSection.innerHTML = desktopPopUp(pageData, i);
    if (window.innerWidth > 768) desktopSection.style.display = 'flex';
    main.style.display = 'none';
    eventChecker = 0;

    const closeBtnD = document.getElementById('D-close');

    closeBtnD.addEventListener('click', () => {
      eventChecker = 1;
      desktopSection.style.display = 'none';
      main.style.display = 'block';
      mobileSection.style.display = 'none';
    });
  });
}

function showAppropriateSection() {
  if (eventChecker === 1) {
    void(0);
  }
  else if (window.innerWidth < 767) {
    // Show mobile section
    mobileSection.style.display = 'block';
    // Hide desktop section
    desktopSection.style.display = 'none';
  } else {
    // Hide mobile section
    mobileSection.style.display = 'none';
    // Show desktop section
    if (eventChecker !== 2)
    desktopSection.style.display = 'block';
  }
}

// Call the function initially to show the appropriate section on page load
showAppropriateSection();

// Listen for window resize events and update the section visibility accordingly
window.addEventListener('resize', showAppropriateSection);