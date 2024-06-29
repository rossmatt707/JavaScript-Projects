document.addEventListener('DOMContentLoaded', () => {
    console.log('Dom content fired up.');
    
    class Greeting extends React.Component {
        render() {
            return (
                <div id="fadeDiv" className="invisible">
                    <h1>Now that's what I call a pizza pie! Aaaaaay!</h1>
                </div>
            );
        }
    }

    ReactDOM.render(<Greeting />, document.getElementById('JSX'));

    setTimeout(() => {
        console.log('Setting class to visible');
        document.getElementById('fadeDiv').classList.add('visible');
    }, 100); // Slight delay to trigger the transition
});
