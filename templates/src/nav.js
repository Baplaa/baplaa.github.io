function navs() {
    const nav_div = document.getElementById("navbar")
    nav_div.insertAdjacentHTML("beforebegin",
    `
        <nav>
            <h1 class="header_name">TRISTAN LINGAT</h1>
            <ul class="nav_link_list">
            <li class="nav_link">
                <a href="/" class="nav_link_a">
                    HOME
                </a>
            </li>
            <li class="nav_link">
                <a href="project" class="nav_link_a">
                    PROJECT
                </a>
            </li>
            <li class="nav_link">
            <a href="contact" class="nav_link_a">
                CONTACT
            </a>
        </li>
        </nav>
    `
    )
}

navs()