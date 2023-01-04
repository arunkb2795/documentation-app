interface ChildProps {
    color: string;
    onClick: () => void;
    children: React.ReactNode;
}

export const Child: React.FC<ChildProps> = ({ color, onClick, children }) => {
    return (
        <div>Props and state {color}
            <button onClick={onClick}>Click me!</button>
            {children}
        </div>
    )
}

