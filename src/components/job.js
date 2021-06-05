import React from "react";
import { Badge, Button, Card, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function Job({ job }) {
    const [open, setOpen] = React.useState(false);
  return (
    <Card className="mb-3 ">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <Card.Title>
              {job.title} -{" "}
              <span className="text-muted font-weight-light">
                {job.company}
              </span>
            </Card.Title>
            <Card.Subtitle>
                {new Date(job.created_at).toLocaleDateString()}
            </Card.Subtitle>
            <Badge variant="secondary" className="mr-2">{job.type}</Badge>
            <Badge variant="secondary">{job.location}</Badge>
            <div >
                <ReactMarkdown children={job.how_to_apply}/>
            </div>
          </div>
        <img className="d-none d-md-block" width="100" height="50"  src={job.company_logo} alt={job.company} />
        </div>
      <Card.Text>
      <Button onClick={()=>setOpen(prevOpen => !prevOpen)} variant="primary">{!open ? "View Details" : "Hide Details"}</Button>
      </Card.Text>
      <Collapse in={open}><div className="mt-4">
          <ReactMarkdown children={job.description}/>
      </div>
      </Collapse>
      </Card.Body>
    </Card>
  );
}
