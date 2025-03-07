export const useCollabs = () => {
  const getProfilesByIds = async (userIds: string[]) => {
    const {data, error} = await groupeProfilesQuery(userIds)

    if(error || !data) return []

    return data
  }

  return { getProfilesByIds }

}
