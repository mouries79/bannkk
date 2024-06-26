import { useEffect, useState } from "react";
import MenuToggleBtn from "../menuToggleBtn/MenuToggleBtn";
import NavRightSecondItem from "../navRightSecondItem/NavRightSecondItem";
import NavRightFirstItem from "../navRightFirstItem/NavRightFirstItem";
import NavLeft from "../navLeft/NavLeft";
import MenuMobile from "../menuMobile/MenuMobile";
import NavLanguage from "../navLanguage/NavLanguage";
import "./Header.css";
import Form from "../form/Form";

export default function Header() {
    const [activeMenu, setActiveMenu] = useState(false);
    const [activeSearch, setActiveSearch] = useState(false);
    const [activeHeader, setActiveHeader] = useState(false);
    const [activeSearchMobile, setActiveSearchMobile] = useState(false);

    const onChangeActiveHeader = (x) => setActiveHeader(x);
    const onChangeActiveMenu = () => setActiveMenu((x) => !x);
    const onChangeActiveSearch = () => setActiveSearch((x) => !x);
    const onChangeActiveSearchMobile = () => setActiveSearchMobile((x) => !x);

    useEffect(() => {
        const body = document.querySelector("body");
        activeMenu ? body.classList.add("bodyOverFlow") : body.classList.remove("bodyOverFlow");
    }, [activeMenu]);

    return (
        <header className={activeSearch ? "boxShadow" : ""}>
            <div className="header-content ">
                <nav className={activeHeader ? "nav sticky" : "nav"}>
                    <a className="nav__logo-inner">
                        <div className="nav__logo"></div>
                    </a>
                    <Form
                        activeHeader={activeHeader}
                        activeSearch={activeSearch}
                        onChangeActiveSearch={onChangeActiveSearch}
                    />
                    <div className={activeSearch ? "nav__content-none" : "nav__content"}>
                        <NavLeft onChangeActiveHeader={onChangeActiveHeader} activeHeader={activeHeader} />
                        <div className="nav__right">
                            {!activeMenu ? <NavRightFirstItem /> : null}
                            {activeMenu ? <NavLanguage className={"d-none__lang"} /> : null}
                            <NavRightSecondItem onChangeActiveSearch={onChangeActiveSearch} />
                            <MenuToggleBtn activeMenu={activeMenu} onChangeActiveMenu={onChangeActiveMenu} />
                        </div>
                    </div>
                </nav>
                {activeMenu ? (
                    <MenuMobile
                        activeSearchMobile={activeSearchMobile}
                        activeHeader={activeHeader}
                        onChangeActiveSearchMobile={onChangeActiveSearchMobile}
                    />
                ) : null}
            </div>
        </header>
    );
}
