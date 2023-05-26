import { useRef } from "react";

const Settings = () => {

    const primary = useRef<any>(null);

    function primaryColor(e: any) {
        console.log(e)
        setCssVar(e.target.value, '--primary-color')
        localStorage.setItem('--primary-color', e.target.value);
    }

    function secondaryColor(e: any) {
        setCssVar(e.target.value, '--secondary-color')
        localStorage.setItem('--secondary-color', e.target.value);
    }

    function ternaryColor(e: any) {
        setCssVar(e.target.value, '--ternary-color')
        localStorage.setItem('--ternary-color', e.target.value);
    }

    function textColor(e: any) {
        setCssVar(e.target.value, '--text-color')
        localStorage.setItem('--text-color', e.target.value);
    }

    function setCssVar(hex: string, varName: string) {
        document.documentElement.style.setProperty(varName, hex)
    }

    return (
        <div className="content content--narrow">
            <div className="panel">
                <h2 className="panel__title">Settings</h2>
                <div className="panel__body">
                    <form className="form" action="">
                        <div className="form__item">
                            <label htmlFor="input-primary-color">Primary color</label>
                            <input ref={primary} id="input-primary-color" type="color" className="input" defaultValue={localStorage.getItem('--primary-color') ?? '#249deb'} data-primary onChange={primaryColor} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="input-secondary-color">Secondary color</label>
                            <input id="input-secondary-color" type="color" className="input" defaultValue="#4ac7c4" data-secondary onChange={secondaryColor} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="input-ternary-color">Ternary color</label>
                            <input id="input-ternary-color" type="color" className="input" defaultValue="#824aea" data-ternary onChange={ternaryColor} />
                        </div>
                        <div className="form__item">
                            <label htmlFor="input-text-color">Text color</label>
                            <input id="input-text-color" type="color" className="input" defaultValue="#1e3a8a" data-text onChange={textColor} />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings;