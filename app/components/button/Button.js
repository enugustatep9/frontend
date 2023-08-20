import './Button.scss'

export default function Button({ parentclass, text, hover }) {
    return (
        <button className={`btn ${hover? 'btn-hover' : ''} ${parentclass? parentclass : ''}`}>
            {text}
        </button>
    )
}