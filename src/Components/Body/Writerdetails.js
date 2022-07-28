import { Row, Col } from "antd";
import WriterdetailsLeft from "./WriterdetailsLeft";
import WriterdetailsRight from "./WriterdetailsRight";
import WriterdetailsMiddle from "./WriterdetailsMiddle";

const Writerdetails = () => {
	return (
		<>
			<div style={{ marginTop: "2rem" }}>
				<Row justify="space-around">
					<Col xs={24} sm={23} md={24} lg={16} xl={10}>
						<WriterdetailsLeft userName="Jane Doe" />
						<Col xs={24} sm={23} md={24} lg={24} xl={24}>
							<p style={{ fontWeight: "600", marginLeft: "5rem" }}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
								commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
								velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
								occaecat cupidatat non proident, sunt in culpa qui officia deserunt
								mollit anim id est laborum.
							</p>
						</Col>
					</Col>
					<Col xs={23} sm={16} md={6} xl={5}>
						<WriterdetailsMiddle />
					</Col>
					<Col xs={23} sm={23} md={18} lg={20} xl={9}>
						<WriterdetailsRight />
					</Col>
				</Row>
			</div>
		</>
	);
};

export default Writerdetails;
