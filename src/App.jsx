import { useState } from "react";
import "./App.css";

function App() {
	const [file, setFile] = useState(null);

	const handleInputFile = (e) => {
		setFile(e.target.files[0]);
	};

	return (
		<div>
			<input
				type="file"
				accept="images/*"
				name="file"
				id="file"
				onChange={handleInputFile}
			/>
			<div>
				{file && (
					<img
						src={URL.createObjectURL(file)}
						alt="selected file preview"
						width={200}
						style={{
							marginTop: "1rem",
							border: "1px solid gray",
						}}
					/>
				)}
			</div>
		</div>
	);
}

export default App;
