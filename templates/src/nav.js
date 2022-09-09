function navs() {
    const nav_div = document.getElementById("navbar")
    nav_div.insertAdjacentHTML("beforebegin",
    `
        <nav>
            <h1 class="header_name">TRISTAN LINGAT</h1>
            <ul class="nav_link_list">
            <li class="nav_link">
                <a href="#insight" class="nav_link_a">
                    INSIGHT
                </a>
            </li>
            <li class="nav_link">
                <a href="#projects" class="nav_link_a">
                    PROJECTS
                </a>
            </li>
            <li class="nav_link">
            <a href="#passions" class="nav_link_a">
                PASSIONS
            </a>
        </li>
        </nav>
    `
    )
}

navs()