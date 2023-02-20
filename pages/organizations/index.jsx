import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "react-bootstrap";

function OrganizationList() {
  const [organizations, setOrganization] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/organization/find-all")
      .then((res) => res.json())
      .then((data) => {
        setOrganization(data);
      });

    return () => {
      setOrganization([]);
    };
  }, []);

  const setData = (data) => {
    setOrganization(data);
  };

  const deleteOrganization = (id) => {
    const isConfirmed = confirm("Are you sure you want to delete this item?");
    if (isConfirmed) {
      fetch(`http://localhost:3000/api/organization/${id}`, {
        method: "DELETE",
      }).then((res) => {
        if (res.ok) {
          const findIndex = organizations.findIndex(
            (organization) => organization.id === id
          );
          organizations.splice(findIndex, 1);
          setOrganization([...organizations]);
        }
      });
      window.location.reload();
      window.location.href = "/organizations";
    }
  };

  return (
    <div>
      <h2>Organization List</h2>
      <Link
        href="/organizations/create"
        className="btn btn-sm btn-success mb-2"
      >
        Add Organization
      </Link>
      <table className="table table-striped">
        <thead>
          <tr>
            <th style={{ width: "3%" }}></th>
            <th style={{ width: "10%" }}>Name</th>
            <th style={{ width: "10%" }}>Email</th>

            <th style={{ width: "10%" }}>Phones</th>
            <th style={{ width: "10%" }}>Address</th>

            <th style={{ width: "5%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {organizations?.length > 0 &&
            organizations.map((organization) => (
              <tr key={organization.id}>
                <td></td>
                <td>{organization.name}</td>
                <td>{organization.email}</td>
                <td>{organization.phones}</td>

                <td>
                  <ol>
                    <li key={organization.address.id}>
                      Street: {organization.address.street}
                    </li>
                    <li key={organization.address.id}>
                      City: {organization.address.city}
                    </li>
                    <li key={organization.address.id}>
                      State: {organization.address.state}
                    </li>
                    <li key={organization.address.id}>
                      Zip: {organization.address.zip}
                    </li>

                    <li key={organization.address.id}>
                      Country: {organization.address.country}
                    </li>
                      
                  </ol>

                </td>

                <td>
                  <Link
                    href={`/organization/${organization.id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => deleteOrganization(organization.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default OrganizationList;
