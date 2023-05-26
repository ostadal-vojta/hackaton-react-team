const Settings = () => {

    return (
        <div className="content content--narrow">
            <div className="panel">
                <h2 className="panel__title">Settings</h2>
                <div className="panel__body">
                    <form className="form" action="">
                        <div className="form__item">
                            <label htmlFor="input-primary-color">Primary color</label>
                            <input id="input-primary-color" type="color" className="input" value="#2563eb" data-primary />
                        </div>
                        <div className="form__item">
                            <label htmlFor="input-secondary-color">Secondary color</label>
                            <input id="input-secondary-color" type="color" className="input" value="#4ac7c4" data-secondary />
                        </div>
                        <div className="form__item">
                            <label htmlFor="input-ternary-color">Ternary color</label>
                            <input id="input-ternary-color" type="color" className="input" value="#824aea" data-ternary />
                        </div>
                        <div className="form__item">
                            <label htmlFor="input-text-color">Text color</label>
                            <input id="input-text-color" type="color" className="input" value="#1e3a8a" data-text />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings;