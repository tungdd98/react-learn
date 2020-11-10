import React from "react";
import styles from "./Loading.module.scss";

const Loading = () => {
    return (
        <div className={styles.loading}>
            <div className={styles.loadingio}>
                <div className={styles.loadingContent}>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Loading;
