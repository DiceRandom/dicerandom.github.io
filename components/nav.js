class Nav extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav>
                <div class="row">
                    <a href="/"><h7>Home</h7></a>
                    <div class="row index">
                        <a href="#about"><h7>About Me</h7></a>
                        <a href="#projects"><h7>Projects</h7></a>
                        <a href="#resume"><h7>Resume</h7></a>
                    </div>
                    <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                        <i class="fa fa-bars"></i>
                    </a>
                </div>
            </nav>
        `;

        //this.refreshNav();
    }

    refreshNav() {
        let currentURL = window.location.href;
        this.querySelectorAll("nav a").forEach(p => {
            if(currentURL.indexOf(p.getAttribute("href")) !== -1){
                p.classList.add("current");
            }
        });
    }
}

customElements.define('nav-component', Nav);