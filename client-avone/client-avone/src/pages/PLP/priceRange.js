import { Range, getTrackBackground } from "react-range";

import React from "react";
const STEP = 0.1;
const MIN = 0;
const MAX = 100;

class Pricerange extends React.Component {
    state = {
        values: [50]
    };
    render() {
        return (
            <div
            >
                <output style={{ marginTop: "30px" }} id="output">
                    ${this.state.values[0].toFixed(1)}
                </output>
                <Range
                    values={this.state.values}
                    step={STEP}
                    min={MIN}
                    max={MAX}
                    onChange={(values) => this.setState({ values })}
                    renderTrack={({ props, children }) => (
                        <div
                            onMouseDown={props.onMouseDown}
                            onTouchStart={props.onTouchStart}
                            style={{
                                ...props.style,
                                height: "36px",
                                display: "flex",
                                width: "100%"
                            }}
                        >
                            <div
                                ref={props.ref}
                                style={{
                                    height: "5px",
                                    width: "209px",
                                    borderRadius: "4px",
                                    background: getTrackBackground({
                                        values: this.state.values,
                                        colors: ["#548BF4", "#ccc"],
                                        min: MIN,
                                        max: MAX
                                    }),
                                    alignSelf: "center"
                                }}
                            >
                                {children}
                            </div>
                        </div>
                    )}
                    renderThumb={({ props, isDragged }) => (
                        <div
                            {...props}
                            style={{
                                ...props.style,
                                height: "42px",
                                width: "42px",
                                borderRadius: "4px",
                                backgroundColor: "#FFF",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                boxShadow: "0px 2px 6px #AAA"
                            }}
                        >
                            <div
                                style={{
                                    height: "16px",
                                    width: "5px",
                                    backgroundColor: isDragged ? "#548BF4" : "#CCC"
                                }}
                            />
                        </div>
                    )}
                />

            </div>
        );
    }
}

export default Pricerange;