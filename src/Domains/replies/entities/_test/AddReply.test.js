const AddReply = require('../AddReply')

describe('a AddReply entities', () => {
	it('should throw error when payload did not contain needed property', () => {
		// Arrange
		const payload = {
			owner: 'user-123',
			threadId: 'thread-123',
			commentId: 'comment-123',
		}

		// Action and Assert
		expect(() => new AddReply(payload)).toThrowError(
			'REPLY.NOT_CONTAIN_NEEDED_PROPERTY'
		)
	})

	it('should throw error when payload did not meet data type specification', () => {
		// Arrange
		const payload = {
			content: 123,
			owner: 'user-123',
			threadId: 'thread-123',
			commentId: 'comment-123',
		}

		// Action and Assert
		expect(() => new AddReply(payload)).toThrowError(
			'REPLY.NOT_MEET_DATA_TYPE_SPECIFICATION'
		)
	})

	it('should create AddReply object correctly', () => {
		// Arrange
		const payload = {
			content: 'dicoding',
			owner: 'user-123',
			threadId: 'thread-123',
			commentId: 'comment-123',
		}

		// Action
		const { content } = new AddReply(payload)

		// Assert
		expect(content).toEqual(payload.content)
	})
})
