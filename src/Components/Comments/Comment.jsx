import { useState } from 'react';

const Comments = () => {
    const [comments, setComments] = useState(["This is awesome!", "Just wow..."]);
    const [newComment, setNewComment] = useState('');
    const [editingIndex, setEditingIndex] = useState(null);
    const [editingText, setEditingText] = useState('');

    const addComment = () => {
        if (newComment.trim()) {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    const deleteComment = (index) => {
        setComments(comments.filter((_, i) => i !== index));
    };

    const editComment = (index) => {
        setEditingIndex(index);
        setEditingText(comments[index]);
    };

    const updateComment = () => {
        if (editingText.trim()) {
            setComments(comments.map((comment, i) => i === editingIndex ? editingText : comment));
            setEditingIndex(null);
            setEditingText('');
        }
    };

    return (
        <div className="w-[80%] m-auto my-2 text-white bg-pink-300 rounded p-4">
            <div className="w-[80%] m-auto p-4 bg-pink-600">
                <div className="w-[30rem] m-auto p-2 bg-black rounded">
                    <img src="https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=600" alt="image" />
                </div>
                <div className="w-fit p-2 m-auto bg-black">
                    A new trend of yellow with white
                </div>
            </div>
            <h1 className="w-fit mt-4 p-2 m-auto bg-black">
                Comments
            </h1>
            {comments.map((comment, index) => (
                <div key={index} className="w-[100%] p-2 bg-pink-600 rounded my-2 flex justify-between items-center">
                    {editingIndex === index ? (
                        <div className="flex w-full">
                            <input
                                type="text"
                                value={editingText}
                                onChange={(e) => setEditingText(e.target.value)}
                                className="flex-grow p-1 mr-2 text-black"
                            />
                            <button onClick={updateComment} className="p-1 bg-blue-500 rounded">Update</button>
                            <button onClick={() => setEditingIndex(null)} className="p-1 bg-gray-500 rounded ml-2">Cancel</button>
                        </div>
                    ) : (
                        <>
                            <span>{comment}</span>
                            <div>
                                <button onClick={() => editComment(index)} className="p-1 bg-yellow-500 rounded mr-2">Edit</button>
                                <button onClick={() => deleteComment(index)} className="p-1 bg-red-500 rounded">Delete</button>
                            </div>
                        </>
                    )}
                </div>
            ))}

            <div className="mt-4">
                <textarea
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="p-2 w-full text-black"
                    placeholder="Add a new comment"
                />
                <button onClick={addComment} className="p-2 bg-green-500 rounded mt-2 w-full">Add Comment</button>
            </div>
        </div>
    );
};

export default Comments;
