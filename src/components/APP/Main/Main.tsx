type MainType = {
    children: React.ReactNode;
    className: string;
};


export const Main: React.FC<MainType> = ({className, children}) => {
    return (
        <main className={className}>
            {children}
        </main>
    )
}