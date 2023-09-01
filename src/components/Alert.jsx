import {useEffect} from 'react';

function Alert(props) {
    const {displayName, closeAlert} = props;

    useEffect(() => {
        const timerId = setTimeout(closeAlert, 3000);

        return () => {
            clearTimeout(timerId);
        }
    }, [displayName]);

    return (
        <div id="toast-container">
            <div className="toast">{displayName} added basket</div>
        </div>
    );
}

export default Alert;