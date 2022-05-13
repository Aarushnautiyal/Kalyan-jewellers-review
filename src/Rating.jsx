import React from 'react'

const Rating = () => {
    return (
        <div>
            <form className='inner'>
                <label htmlFor="Review Title">Review Title*</label>
                <br />
                <input type="text" name='Review Title'/>
                <br />
                <label htmlFor="share">Share a pic or video with candere Jewelery</label>
                <br />
                <input type="text" name='share'  placeholder='Max 5 Mb'/>
                <input type="file" name='share'  placeholder='Max 5 Mb'/>
                <br />
                <textarea name="review" id="" cols="30" rows="10"></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Rating
