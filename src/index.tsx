import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./layouts/app/app";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { store } from "./store";
import { UserContextDefaultProvider } from "./contexts/user";
import { ThemeContextDefaultProvider } from "./contexts/theme";
import { LoadingContextDefaultProvider } from "./contexts/loding";

ReactDOM.render(
    <Provider store={store}>
        <UserContextDefaultProvider>
            <ThemeContextDefaultProvider>
                <LoadingContextDefaultProvider>
                    <App />
                </LoadingContextDefaultProvider>
            </ThemeContextDefaultProvider>
        </UserContextDefaultProvider>
    </Provider>,
    document.getElementById("root"),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
