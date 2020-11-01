export default function (total_results, current_page, per_page, length) {
  const total_pages = Math.ceil(total_results / per_page)

  if (current_page < 1) {
    current_page = 1
  }

  if (current_page > total_pages) {
    current_page = total_pages
  }

  let first_page = Math.max(1, current_page - Math.floor(length / 2))

  let last_page = Math.min(total_pages, current_page + Math.floor(length / 2))

  if (last_page - first_page + 1 < length) {
    if (current_page < total_pages / 2) {
      last_page = Math.min(
        total_pages,
        last_page + (length - (last_page - first_page))
      )
    } else {
      first_page = Math.max(1, first_page - (length - (last_page - first_page)))
    }
  }

  if (last_page - first_page + 1 > length) {
    if (current_page > total_pages / 2) {
      first_page++
    } else {
      last_page--
    }
  }

  return {
    current_page: current_page,
    first_page: first_page,
    last_page: last_page,
    previous_page: current_page - 1,
    next_page: current_page + 1,
    total_pages,
  }
}
