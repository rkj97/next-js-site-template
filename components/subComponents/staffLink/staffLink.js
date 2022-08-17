import { StyledStaffLink } from "./staffLink.styled";

const StaffLink = (props) => (
  <StyledStaffLink href={props.href}>
    <img src={props.imageUrl}  alt=""/>
    <span>{props.staffName}</span>
  </StyledStaffLink>
);

export default StaffLink;
