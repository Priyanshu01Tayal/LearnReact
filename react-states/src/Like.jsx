import { useState } from "react";

function Like() {
    const [liked, setLiked] = useState(false);

    function handleClick() {
        setLiked(!liked);
    }

    return (
        <button
            style={{ color: liked ? "red" : "black" }}
            onClick={handleClick}
        >
            ❤️ Like
        </button>
    );
}

export default Like;