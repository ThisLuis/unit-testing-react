import PropTypes from 'prop-types';

export const FirstApp = ( {title, subTitle, name} ) => {
    return (
        <>
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <h1>{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
}

// Las defaultProps se ejecutan primero que las propTypes
FirstApp.defaultProps = {
    name: 'Luis Nieves!!!',
    subTitle: 'Subtitulo por defecto',
    // title: 'Titulo principal',
}
