import Lists from "./Lists";
import { IconWrapper, SearchContainer, SearchInput, SearchWrapper } from "./secondDashStyled";
import { BiSearch } from "react-icons/bi"

const SearchNames = ({role, roleName, fetchedRoles, searchTerm, setSearchTerm, searchResults, setSearchResults}) => {
  const handleSearch = (event) => {
    const keyword = event?.target?.value?.toLowerCase();
    setSearchTerm(keyword);

    if (keyword.trim() === "") {
      setSearchResults([]);
    } else {
      const filteredUsers = fetchedRoles?.filter(
        (user) =>
          user?.firstName?.toLowerCase()?.includes(keyword) ||
          user?.lastName?.toLowerCase()?.includes(keyword)
      );
      setSearchResults(filteredUsers);
    }
  };

  return (
    <>
      <SearchWrapper>
        <SearchContainer>
          <IconWrapper><BiSearch /></IconWrapper>
          <SearchInput placeholder={`Search for ${role}`}
           value={searchTerm} onChange={handleSearch}
          />
        </SearchContainer>
        <select name="pets" id="pet-select">
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </SearchWrapper>
      {searchTerm !== "" &&
          <Lists searchResults={searchResults} width="100%" btnBg="#51FFFF" btnColor="#000" roleName={roleName} />
      }
    </>
  )
};

export default SearchNames;