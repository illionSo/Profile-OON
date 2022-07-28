import React, { useState } from "react";
import { Popconfirm, message, Button, Typography } from "antd";

const { Paragraph } = Typography;
const content = (
	<div>
		<Paragraph style={{ fontWeight: "600" }}>
			You’re going to take this job and you’ll losse it of you fail to complete it
			within a mentioned time of <span style={{ color: "red" }}>40 hours.</span>{" "}
			Your timer will start as soon as you confirm this with “Agree” button below.
			You can revert or free the job you’ve taken within 5 hours by going to “My
			Jobs” tab on your administration panel. Click on the button below if you
			agree.
		</Paragraph>
	</div>
);
const Popup = () => {
	const [style, setStyle] = useState(false);

	function confirm() {
		message.info("You have succesfully applied for a job");
	}

	console.log(style);
	return (
		<>
			<Popconfirm
				placement="rightBottom"
				title={content}
				onConfirm={confirm}
				okText="Agree"
				cancelText="No"
			>
				<Button
					size="medium"
					type="primary"
					style={{ marginTop: "1rem" }}
					onClick={() => {
						setStyle(!style);
					}}
				>
					Take This Job
				</Button>
			</Popconfirm>
		</>
	);
};
export default Popup;
