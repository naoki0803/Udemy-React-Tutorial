import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./components/Modal";

/* POINT createPortalはどんなときに使うか？
子要素は親要素のスタイルによって表示に制限を受ける場合があります。
（overflow: hidden 、 z-index 、 width　など・・・ ）
それらの制限なく、子要素が親要素を「飛び出して」表示する必要があるときにcreatePortalを使うのが有効です。
モーダル、ポップアップ、トーストは使用の代表例です。
*/
/* POINT createPortalの使い方
第一引数: React の子要素としてレンダー可能なもの （要素、文字列、フラグメント、コンポーネントなど）
第二引数: レンダー先のDOM要素
*/

const ModalPortal = ({ children }) => {
    const target = document.querySelector(".container.start");
    return createPortal(children, target);
};

const Example = () => {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div onClick={() => console.log("親要素へのバグリング発火")}>
            <div
                className="container start"
                onClick={
                    () => console.log("マウント先の要素へのバグリング発火") // 実際には発火しない リアクト要素のツリー上でバブリングが発生する
                }
            ></div>
            <button
                type="button"
                onClick={() => setModalOpen(true)}
                disabled={modalOpen}
            >
                モーダルを表示する
            </button>
            {modalOpen && (
                <ModalPortal>
                    <Modal handleCloseClick={() => setModalOpen(false)} />
                </ModalPortal>
            )}
        </div>
    );
};

export default Example;
