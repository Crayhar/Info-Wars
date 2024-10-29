import React from 'react';
import MapWithScrollZoom from './MapWithScrollZoom';

const App = () => {
    return (
        <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ padding: '50px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
                <h1>Welcome to the Map Zoom Scroll Demo</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec varius odio. Vivamus at semper metus. Sed venenatis urna eget malesuada feugiat. Ut sit amet facilisis nisl. Donec in sagittis mauris. Aliquam erat volutpat.</p>
                <p>Scroll down to see the map zoom in as you scroll.</p>
                <p>Praesent in congue nunc. Vivamus consequat sapien at nunc fermentum, sit amet euismod magna scelerisque. Quisque sed mauris neque. Phasellus varius dolor quis convallis bibendum. Vestibulum tincidunt ex ut eros dapibus, non facilisis mi posuere. Nulla facilisi. Duis id orci a est cursus egestas.</p>
            </div>

            {/* Map in the background */}
            <MapWithScrollZoom />

            <div style={{ padding: '50px', maxWidth: '800px', margin: 'auto', textAlign: 'center' }}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Duis id orci a est cursus egestas. Suspendisse potenti. Fusce accumsan erat non odio ornare consequat. In id vestibulum ipsum, a luctus felis.</p>
                <p>Keep scrolling to see the map continue to zoom in!</p>
                <p>Proin ac nunc felis. Ut cursus, eros id pharetra fermentum, nisl augue laoreet dui, vel tristique mauris ligula vitae dui. Suspendisse consectetur, nisl ut dapibus tempus, augue ipsum volutpat mauris, at accumsan augue magna at eros. Integer vestibulum mauris nulla, at luctus ex scelerisque at. Curabitur suscipit efficitur lacinia. Pellentesque volutpat odio ac nibh suscipit volutpat.</p>
                <p>End of content. Scroll back up to zoom out!</p>
            </div>
        </div>
    );
};

export default App;
