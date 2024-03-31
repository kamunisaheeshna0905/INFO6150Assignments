function CompanyCard({ company }) {
    return (
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={company.picture || 'default-image-url.jpg'} // Use a default image if none is provided
          alt={company.name}
        />
        <Typography padding={2} variant="h6" component="div">
          {company.name}
        </Typography>
      </Card>
    );
  }
  
  export default CompanyCard.js;